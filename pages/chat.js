import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Box, TextField } from "@skynexui/components";
import { createClient } from "@supabase/supabase-js";

import appConfig from "../config.json";
import Header from "../src/components/Header";
import MessageList from "../src/components/MessageList";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker";
import Loading from "../src/components/Loading";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQyMTg0MSwiZXhwIjoxOTU4OTk3ODQxfQ.jq6Rek4qIelp34IPNsmOFhvrmABNHvlS0JOCrgOPsTo";
const SUPABASE_URL = "https://qvnjzdtfhsbeklbddtqv.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function mensagensEmRealTime(adicionaMensagem) {
  return supabaseClient
    .from("mensagens")
    .on("INSERT", ({ respostaLive }) => {
      adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}

export default function ChatPage() {
  const roteamento = useRouter();
  const usuaioLogado = roteamento.query.username;
  const [mensagem, setMensagem] = useState("");
  const [listaDeMensagens, setListaDeMensagens] = useState([]);

  useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        console.log("dados da consulta", data);
        setListaDeMensagens(data);
      });
    mensagensEmRealTime((novaMensagem) => {
      setListaDeMensagens((valorAtualDaLista) => {
        return [data[0], ...valorAtualDaLista];
      });
    });
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      //id: listaDeMensagens.length + 1,
      de: usuaioLogado,
      texto: novaMensagem,
    };

    supabaseClient
      .from("mensagens")
      .insert([
        // Tem que ser um objeto com os Mesmos campos que você escreveu no supabase
        mensagem,
      ])
      .then(({ data }) => {
        console.log("Creating message", data);
      });
    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[100],
        backgroundImage: appConfig.theme.backgroundImage2,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      {listaDeMensagens <= 0 ? (
        <Loading />
      ) : (
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            boxShadow: "0 2px 10px 0 rgb(255 255 255 / 20%)",
            borderRadius: "15px",
            backgroundColor: appConfig.theme.colors.primary[700],
            height: "100%",
            maxWidth: "95%",
            maxHeight: "95vh",
            padding: "32px",
          }}
        >
          <Header />
          <Box
            styleSheet={{
              position: "relative",
              display: "flex",
              flex: 1,
              height: "80%",
              flexDirection: "column",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <MessageList mensagens={listaDeMensagens} />
            <Box
              as="form"
              styleSheet={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                value={mensagem}
                onChange={(e) => {
                  const valor = e.target.value;
                  setMensagem(valor);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleNovaMensagem(mensagem);
                  }
                }}
                placeholder="type your new message here..."
                type="textarea"
                styleSheet={{
                  width: "100%",
                  border: "0",
                  resize: "none",
                  borderRadius: "15px",
                  padding: "6px 8px",
                  backgroundColor: appConfig.theme.colors.neutrals[999],
                  marginRight: "20px",
                  color: appConfig.theme.colors.neutrals[200],
                }}
              />
              <ButtonSendSticker
                onStickerClick={(sticker) => {
                  console.log("Save Sticker into the Bank", sticker);
                  handleNovaMensagem(":sticker: " + sticker);
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

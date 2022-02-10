import { Box, Button, Text } from "@skynexui/components";
import { useRouter } from "next/router";
import appConfig from "../config.json";

function Page404() {
  const roteamento = useRouter();
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",

        backgroundImage: appConfig.theme.backgroundImage404,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#141414",
        }}
      >
        <Text
          styleSheet={{
            fontFamily: "Patua One, cursive;",
            fontSize: "70px",
            fontWeight: "bold",
            marginBottom: "40px",
            color: "red",
            textShadow: "2px 2px 3px gray",
          }}
          tag="h1"
        >
          404
        </Text>

        <Text
          styleSheet={{
            marginBottom: "40px",
            textAlign: "center",
            fontSize: "25px",
            lineHeight: "40px",
            textShadow: "2px 2px 3px white",
          }}
          tag="p"
        >
          Você Perdeu o Caminho Herói, <br />
          Mas ,Não se preocupe, você não está Sozinho.Volte ao Início.
        </Text>

        <Button
          buttonColors={{
            contrastColor: "#FFFFFF",
            mainColor: "#000000",
            mainColorLight: "#E67635",
            mainColorStrong: "#AB4E19",
          }}
          label="  Home  "
          colorVariant="dark"
          rounded="full"
          size="xl"
          styleSheet={{
            disabled: {},
            focus: {},
            hover: {
              cursor: "pointer",
            },
          }}
          variant="secondary"
          onClick={(e) => roteamento.push("/")}
        />
      </Box>
    </Box>
  );
}

export default Page404;

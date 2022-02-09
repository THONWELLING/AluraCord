import { Box, Button, Text, Image } from "@skynexui/components";
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

        backgroundImage: appConfig.theme.backgroundImage2,
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
          color: "#ccc",
        }}
      >
        <Text
          styleSheet={{
            fontFamily: "Patua One, cursive;",
            fontSize: "60px",
          }}
          tag="h1"
        >
          404
        </Text>

        <Text>Você Perdeu o Caminho de Casa</Text>

        <Text
          styleSheet={{
            marginBottom: "40px",
            textAlign: "center",
          }}
          tag="p"
        >
          Não se preocupe, você não está só, volte para o inicio.
        </Text>

        <Button
          buttonColors={{
            contrastColor: "#FFFFFF",
            mainColor: "#000000",
            mainColorLight: "#E67635",
            mainColorStrong: "#AB4E19",
          }}
          label="Home"
          colorVariant="dark"
          rounded="md"
          size="md"
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

import React from "react";
import { Box, Button, Text, Image } from "@skynexui/components";
import appConfig from "../../../config.json";

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState("");

  return (
    <Box
      styleSheet={{
        position: "relative",
      }}
    >
      <Button
        styleSheet={{
          minWidth: "80px",
          minHeight: "50px",
          fontSize: "20px",
          color: appConfig.theme.colors.primary[400],
          lineHeight: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "5px",
          marginBottom: "7px",
          backgroundColor: appConfig.theme.colors.neutrals[999],
          filter: isOpen ? "grayscale(0)" : "grayscale(1)",
          focus: {
            backgroundColor: appConfig.theme.colors.neutrals[600],
          },
        }}
        label="🕸"
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            position: "absolute",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            width: {
              xs: "200px",
              sm: "325px",
            },
            height: "360px",
            right: "0px",
            bottom: "50px",
            padding: "16px",
            boxShadow:
              "rgba(150, 150, 150, 0.15) 2px 2px 2px 1px, rgba(255, 255, 255, 0.24) 0px 8px 8px 0px",
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: appConfig.theme.colors.neutrals["100"],
              //   fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              flex: 1,
              paddingTop: "16px",
              overflowY: "scroll",
            }}
          >
            {appConfig.stickers.map((sticker) => (
              <Text
                onClick={() => {
                  // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                tag="li"
                key={sticker}
                styleSheet={{
                  width: "30%",
                  borderRadius: "10px",
                  padding: "10px",
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[999],
                  },
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

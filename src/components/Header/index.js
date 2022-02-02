import React from "react";
import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import appConfig from "../../../config.json";

const Header = () => {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          variant="heading5"
          styleSheet={{
            color: appConfig.theme.colors.neutrals[200],
            width: "100%",
            fontSize: "34px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Chat
        </Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
          styleSheet={{
            display: "flex",
            width: "120px",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appConfig.theme.colors.primary[900],
          }}
        />
      </Box>
    </>
  );
};

export default Header;

import React from "react";
import { Box } from "@skynexui/components";
import appConfig from "../../../config.json";

const Loading = () => {
  return (
    <Box
      styleSheet={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.neutrals[300],
        backgroundImage: appConfig.theme.backgroundImageLoading,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    ></Box>
  );
};

export default Loading;

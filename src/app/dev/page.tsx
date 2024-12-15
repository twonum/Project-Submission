// src/app/dev/page.tsx

"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/dev/page.tsx

"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const VSCodeEmbed = () => {
  useEffect(() => {
    // You can also add any JS to control the iframe behavior here.
    // For example, to hide the iframe controls or handle the behavior on load.
  }, []);

  return (
    <Box minH={"100vh"} bg-transparent color={"white"} px={6} py={8}></Box>
  );
};

export default VSCodeEmbed;

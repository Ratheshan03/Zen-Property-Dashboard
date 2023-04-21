import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useGetIdentity } from "@refinedev/core";
import React, { useContext } from "react";

import { ColorModeContext } from "../../../contexts/color-mode";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const showUserInfo = user && (user.name || user.avatar);

  return (
    <AppBar position="sticky" elevation={0} sx={{ background: "#fcfcf" }}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            color="inherit"
            onClick={() => {
              setMode();
            }}
            sx={{ marginRight: "20px" }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {showUserInfo && (
              <Stack direction="row" gap="16px" alignItems="center">
                {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
                {user.name && (
                  <Typography variant="subtitle2">{user?.name}</Typography>
                )}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Box, Button, Divider } from "@mui/material";

export const Route = createRootRoute({
  component: () => (
    <>
      <Box sx={{ p: 2, display: "flex", gap: 2 }}>
        <Button
          component={Link}
          to="/"
          sx={{ "&.active": { fontWeight: "bold" } }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/about"
          sx={{ "&.active": { fontWeight: "bold" } }}
        >
          About
        </Button>
      </Box>
      <Divider />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

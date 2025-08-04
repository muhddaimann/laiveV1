import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";

export default function LayoutD() {
  const theme = useTheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "LaiveScreen™",
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.onSurface,
        }}
      />
    </Stack>
  );
}

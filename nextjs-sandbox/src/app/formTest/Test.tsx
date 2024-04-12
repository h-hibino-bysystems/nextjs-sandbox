import Stack from "@mui/material/Stack";

export default function Test({ text }: { text: string }) {
  return (
    <Stack bgcolor={"red"} color={"white"}>
      {text}
    </Stack>
  );
}

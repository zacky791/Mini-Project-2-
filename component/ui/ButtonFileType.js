import { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

function FileInput({ onChange }) {
  const [filename, setFilename] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilename(file.name);
      onChange(file);
    }
  };

  return (
    <Box>
      <Button as="label" htmlFor="file-input" cursor="pointer">
        Upload a file
      </Button>
      <Input
        id="file-input"
        type="file"
        accept=".jpg,.jpeg,.png,.pdf" // Customize accepted file types
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {filename && (
        <Text mt="2">
          Selected file: {filename}
        </Text>
      )}
    </Box>
  );
}

export default FileInput
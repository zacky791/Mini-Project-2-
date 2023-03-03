import { Text } from '@chakra-ui/react';
import Link from 'next/link';

function ChakraNextLinkText({ href, children, ...props }) {
    return (
      <Link href={href} passHref>
        <Text  {...props} >
          {children}
        </Text>
      </Link>
    );
  }
export default ChakraNextLinkText

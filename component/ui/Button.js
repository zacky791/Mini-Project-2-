import Link from 'next/link';
import { Button, Image } from '@chakra-ui/react';

function ChakraNextLinkButton({ href, children,onClick, ...props }) {
    return (
      <Link href={href} passHref>
        <Button {...props} onClick={onClick}>
          {children}
        </Button>
      </Link>
    );
  }
export default ChakraNextLinkButton

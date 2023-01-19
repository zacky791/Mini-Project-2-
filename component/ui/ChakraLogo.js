import Link from 'next/link';
import { Button, Image } from '@chakra-ui/react';
import Logo from './Logo';

function ChakraLogo({ href, children, ...props }) {
    return (
      <Link href={href} passHref>
        <Logo  width={'200px'} p={'4px'} pl={{base:"20px" ,md:'50px'}} display={{base:"block",md:"block"}} {...props}>
          {children}
        </Logo>
      </Link>
    );
  }
export default ChakraLogo

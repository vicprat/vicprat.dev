import React from 'react';
import { IoLogoTwitter, IoLogoGithub, IoMail, IoLogoLinkedin } from 'react-icons/io5';
import { Button, Box } from '@chakra-ui/react';
import Link from 'next/link';

const buttons = [
  {
    id: 1,
    title: 'mail',
    icon: <IoMail />,
    href: 'mailto:hey@vicprat.dev',
    user: 'hey@vicprat.dev',
  },
  {
    id: 2,
    title: 'github',
    icon: <IoLogoGithub />,
    href: 'https://github.com/vicprat',
    user: '@vicprat',
  },
  {
    id: 3,
    title: 'linkedIn',
    icon: <IoLogoLinkedin />,
    href: 'https://www.linkedin.com/in/vicprat/',
    user: '/in/vicprat',
  },
  {
    id: 4,
    title: 'twitter',
    icon: <IoLogoTwitter />,
    href: 'https://twitter.com/vic_prat',
    user: '@vic_prat',
  },
];

const ContactBtns = ({ fontSize, colorScheme }) => {
  return (
    <Box flex textAlign="center">
      {buttons.map((button) => {
        return (
          <React.Fragment key={button.id}>
            <Link href={button.href} target="_blank">
              <Button variant="ghost" fontSize={fontSize} leftIcon={button.icon} colorScheme={colorScheme}></Button>
            </Link>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default ContactBtns;

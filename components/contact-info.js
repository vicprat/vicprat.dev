import { IoLogoTwitter, IoLogoGithub, IoMail, IoLogoLinkedin } from 'react-icons/io5';
import { Button, Box } from '@chakra-ui/react';
import Link from 'next/link';

const ContactBtns = () => {
  const array = [
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

  return (
    <Box flex textAlign="center">
      {array.map((item) => {
        return (
          <>
            <Link key={item.id} href={item.href} target="_blank">
              <Button key={item.id} variant="ghost" leftIcon={item.icon} colorScheme="gray"></Button>
            </Link>
          </>
        );
      })}
    </Box>
  );
};

export default ContactBtns;

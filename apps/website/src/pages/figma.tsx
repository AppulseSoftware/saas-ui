import * as React from 'react'

import {
  chakra,
  AspectRatio,
  Box,
  Button,
  Heading,
  Text,
  HStack,
  useDisclosure,
  Icon,
  Stack,
  ButtonGroup,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
} from '@chakra-ui/react'

import Section from '@/components/marketing/section-wrapper'
import SectionTitle from '@/components/marketing/section-title'

import SEO from '@/components/seo'
import { Testimonials } from '@/components/testimonials'

import { BackgroundGradientRadial } from '@/components/background-gradient-radial'
import { SignupForm } from '@/components/signup-form'
import { FaFigma } from 'react-icons/fa6'
import { ButtonLink } from '@/components/link'
import {
  FiArrowRight,
  FiGrid,
  FiSliders,
  FiSmile,
  FiThumbsUp,
} from 'react-icons/fi'
import Features from '@/components/marketing/features'
import {
  LuBraces,
  LuGrid,
  LuLayoutGrid,
  LuLayoutPanelLeft,
  LuLayoutPanelTop,
  LuPanelLeftClose,
  LuPanelTop,
} from 'react-icons/lu'
import Hero from '@/components/marketing/hero'
import { FallInPlace } from '@/components/motion/fall-in-place'
import { Br, Em } from '@/components/typography'
import { FigmaLogo } from '@/components/logos/figma'
import Image from 'next/image'
import { UsedBy } from '@/components/used-by'
import {
  Property,
  PropertyLabel,
  PropertyList,
  PropertyValue,
} from '@saas-ui/react'

const FigmaPage = () => {
  return (
    <Box>
      <SEO
        title="Saas UI"
        description="Professionally crafted Figma design system for designing
        beautiful products at any scale."
        titleTemplate="%s - Figma Design System"
      />
      <BackgroundGradientRadial
        top="-30%"
        bottom="auto"
        opacity="0.1"
        _dark={{ opacity: 0.5 }}
        pointerEvents="none"
      />
      <Box mb={8} w="full" position="relative" overflow="hidden" zIndex="1">
        <FigmaHero />

        <UsedBy pt="14" />

        <Stats />

        <FigmaEmbed />

        <Testimonials />
      </Box>
    </Box>
  )
}

const FigmaHero = () => {
  return (
    <Stack alignItems="center" mt="24" pt="12">
      <FallInPlace
        as="span"
        fontSize="sm"
        borderWidth="1px"
        borderRadius="full"
        px="4"
        py="1"
        bg="whiteAlpha.200"
        boxShadow="md"
        fontWeight="medium"
        textAlign="center"
        initialInView
      >
        Saas UI Figma Kit ・ v0.1
      </FallInPlace>
      <Hero
        as={Stack}
        alignItems="center"
        textAlign="center"
        pt="12"
        title={
          <>
            <FallInPlace
              as="h1"
              textAlign="center"
              initialInView
              textStyle="pageTitle"
            >
              The Figma design system and
              <Br /> UI kit for SaaS products
            </FallInPlace>
          </>
        }
        description={
          <FallInPlace
            delay={0.4}
            fontWeight="medium"
            textAlign="center"
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
            initialInView
          >
            Align design and dev teams with <Em>50+ primitive components</Em>
            <Br />
            and a growing collection of templates and blocks
            <Br /> available as <Em>Figma assets and React components</Em>.
          </FallInPlace>
        }
      >
        <FallInPlace delay={1} initialInView mt="12">
          <ButtonGroup
            spacing="0"
            gap={4}
            alignItems="stretch"
            justifyContent="stretch"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <ButtonLink colorScheme="primary" size="lg" href="/pricing">
              View Pricing
            </ButtonLink>
            <ButtonLink
              size="lg"
              href="/docs"
              variant="outline"
              borderColor="blackAlpha.400"
              _dark={{
                borderColor: 'whiteAlpha.400',
              }}
              _hover={{
                bg: 'whiteAlpha.200',
              }}
              leftIcon={<FaFigma />}
              rightIcon={
                <Icon
                  as={FiArrowRight}
                  sx={{
                    transitionProperty: 'common',
                    transitionDuration: 'normal',
                    '.chakra-button:hover &': {
                      transform: 'translate(5px)',
                    },
                  }}
                />
              }
            >
              Preview
            </ButtonLink>
          </ButtonGroup>
        </FallInPlace>
      </Hero>
      <Box
        role="group"
        width="80vw"
        maxW="1200px"
        margin="0 auto"
        alignItems="center"
        position="relative"
        zIndex="2"
      >
        <FallInPlace delay={1.4} threshold={0.2}>
          <AspectRatio ratio={1100 / 698}>
            <Image
              src={useColorModeValue(
                '/screenshots/figma.png',
                '/screenshots/figma-dark.png'
              )}
              width={1200}
              height={698}
              alt="Screenshot of a Saas UI Figma Kit"
              quality="85"
              priority
            />
          </AspectRatio>
        </FallInPlace>
      </Box>
    </Stack>
  )
}

const StatsCard = ({ title, children, description, gridColumn, ...rest }) => {
  return (
    <Card
      gridColumn={gridColumn}
      borderRadius="lg"
      variant="solid"
      gap="2"
      py="4"
      px="4"
      bg="gray.50"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="inherit"
      position="relative"
      overflow="hidden"
      _dark={{
        bg: 'gray.800',
        borderColor: 'transparent',
      }}
    >
      <CardBody>
        <Stack {...rest}>
          <Box>
            <Heading
              as="h3"
              color="primary.300"
              fontWeight="medium"
              fontSize="lg"
              mb="2"
            >
              {title}
            </Heading>

            <Text fontWeight="medium" fontSize="1.3em" maxW="80%">
              {description}
            </Text>
          </Box>

          {children}
        </Stack>
      </CardBody>
    </Card>
  )
}

const Stats = () => {
  return (
    <Section innerWidth="container.xl">
      <HStack alignItems="start" justifyContent="space-between">
        <Heading mb="12" maxW="400px" fontSize="3xl">
          Everything you need to get your design system of the ground. Fast.
        </Heading>

        <HStack>
          <ButtonLink href="/pricing" variant="primary" size="md">
            Buy now
          </ButtonLink>
          <ButtonLink
            size="md"
            href="/docs"
            variant="outline"
            borderColor="blackAlpha.400"
            _dark={{
              borderColor: 'whiteAlpha.400',
            }}
            _hover={{
              bg: 'whiteAlpha.200',
            }}
            leftIcon={<FaFigma />}
            rightIcon={
              <Icon
                as={FiArrowRight}
                sx={{
                  transitionProperty: 'common',
                  transitionDuration: 'normal',
                  '.chakra-button:hover &': {
                    transform: 'translate(5px)',
                  },
                }}
              />
            }
          >
            Preview
          </ButtonLink>
        </HStack>
      </HStack>

      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="8">
        <StatsCard
          title="250+ variables"
          description="Create consistent designs with tokens and variables."
          flexDirection="row"
          alignItems="center"
          gridColumn="span 3"
        >
          <Box overflow="hidden" borderRadius="md">
            <Image src="/img/figma/variables.png" width="229" height="369" />
          </Box>
        </StatsCard>
        <StatsCard
          title="2000+ variants"
          description="Manage multiple component variations effortlessly."
          gridColumn="span 3"
        />
        <StatsCard
          title="50+ blocks and examples"
          description={
            <>
              Includes ready-to-use pages and components, available in Figma and
              React. <br />
              <br />{' '}
              <Text as="span" color="muted" fontSize="xl">
                New blocks added regularly.
              </Text>
            </>
          }
          gridColumn="span 4"
          flexDirection="row"
          alignItems="center"
        >
          <Box width="620px" height="300px">
            <Box position="absolute" right="-200px" top="0">
              <Image
                src="/img/figma/blocks.png"
                width="620"
                height="400"
                quality={100}
              />
            </Box>
          </Box>
        </StatsCard>
        <StatsCard
          title="2000+ icons"
          description="Icons for every use case, multiple styles from 9 icon packs."
          gridColumn="span 2"
          flexDirection="column-reverse"
        >
          <Box height="160px">
            <Box position="absolute" top="-100px" left="0" width="100%">
              <Image
                src="/img/figma/icons.svg"
                width="400"
                height="400"
                quality="100"
                alt="Icon preview"
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Box>
        </StatsCard>
      </Box>
    </Section>
  )
}

const Figma = () => {
  return (
    <Section id="pricing" pos="relative" innerWidth="container.xl" py="20">
      <Box zIndex="2" pos="relative">
        <Hero
          title="Saas UI Figma Kit"
          description={
            <>
              <Text fontSize="xl" mb="12" color="muted">
                Professionally crafted Figma design system for <br /> designing
                beautiful products at any scale.
              </Text>
            </>
          }
        />

        <HStack justifyContent="center">
          <ButtonLink
            href="/pricing"
            variant="primary"
            size="lg"
            leftIcon={<FaFigma />}
          >
            Figma Pro early access
          </ButtonLink>
          <ButtonLink
            size="lg"
            href="https://www.figma.com/community/file/1257658419283927894"
            target="_blank"
            variant="outline"
            borderColor="blackAlpha.400"
            _dark={{
              borderColor: 'whiteAlpha.400',
            }}
            _hover={{
              bg: 'whiteAlpha.200',
            }}
            rightIcon={
              <Icon
                as={FiArrowRight}
                sx={{
                  transitionProperty: 'common',
                  transitionDuration: 'normal',
                  '.chakra-button:hover &': {
                    transform: 'translate(5px)',
                  },
                }}
              />
            }
          >
            Community Library
          </ButtonLink>
        </HStack>
      </Box>
    </Section>
  )
}

const Benefits = () => {
  return (
    <Features
      id="benefits"
      columns={[1, 2, 2, 4]}
      iconSize={4}
      innerWidth="container.xl"
      pt="20"
      features={[
        {
          title: 'Variants',
          icon: LuLayoutGrid,
          description: 'Manage multiple component variations effortlessly.',
          iconPosition: 'left',
          delay: 0.6,
        },
        {
          title: 'Auto layout',
          icon: LuLayoutPanelLeft,
          description:
            'Ensure design consistency across screens with automatic layout adjustments.',
          iconPosition: 'left',
          delay: 0.8,
        },
        {
          title: 'Variables',
          icon: LuBraces,
          description: 'Customize design properties easily with variables.',
          iconPosition: 'left',
          delay: 1,
        },
        {
          title: 'Page examples',
          icon: LuPanelTop,
          description:
            'Includes ready-to-use interactive demos, pages, elements, and more.',
          iconPosition: 'left',
          delay: 1.1,
        },
      ]}
    />
  )
}

const FigmaEmbed = () => {
  return (
    <Box py="40">
      <Box mb="8">
        <Heading textAlign="center" size="xl" fontWeight="medium" mb="2">
          Free community library
        </Heading>
        <Text textAlign="center" color="muted" fontSize="xl">
          Try out our free community library. Used by 1000+ designers.
        </Text>
      </Box>
      <Box position="relative" maxW="container.xl" mx="auto">
        <ButtonLink
          href="https://www.figma.com/community/file/1257658419283927894"
          position="absolute"
          top="4"
          right="4"
          left="auto"
          bottom="auto"
          zIndex="1"
          leftIcon={<FaFigma />}
        >
          Open in Figma
        </ButtonLink>
        <AspectRatio ratio={16 / 9} w="full">
          <Box
            as="iframe"
            objectFit={'cover'}
            rounded="xl"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXsBODCq9lrqBAwReJqikbR%2FSaas-UI-Theme-1.1%3Ftype%3Ddesign%26node-id%3D4228%253A35736%26mode%3Ddesign%26t%3DTHstGvI1X3duAdqr-1"
          ></Box>
        </AspectRatio>
      </Box>
    </Box>
  )
}

export default FigmaPage

export async function getStaticProps() {
  return {
    props: {
      header: {
        position: 'fixed',
        variant: 'dark',
      },
    },
  }
}

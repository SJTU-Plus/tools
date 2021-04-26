import { Button } from '@chakra-ui/button'
import { Box, Container, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { sample } from 'lodash'
import React, { useState, useRef } from 'react'

import Logo from './Logo'

interface ChoicesWeightInterface{
  [choice: string]: number
}

const choicesWeight = {
    "肯德基": 1,
    "汉堡王": 1,
    "乐凯撒": 1,
    "江边城外": 1,
    "小菜园": 1,
    "避风塘": 1,
    "星伦多": 1,
    "聚兴阁": 2,
    "吴老九": 1,
    "红魔": 1,
    "捞王": 1,
    "苏小柳": 1,
    "韩宫宴": 1,
    "发添": 1,
    "佬肥猫": 1,
    "萨莉亚": 3,
    "肯塔尔": 1,
    "西贝莜面村": 1,
    "寿司沼津港": 1,
    "谷田稻香": 1,
    "金饭碗": 1,
    "三鱼旨川": 1,
    "鱼旨匠": 1,
    "尚品天泰": 1,
    "毕真": 1,
}

function generateChoices(choicesWeight: ChoicesWeightInterface): string[] {
  const result = [] as string[]
  const keys = Object.keys(choicesWeight)

  keys.forEach((key) => {
    let weight = choicesWeight[key]
    while (weight > 0) {
      result.push(key)
      weight--
    }
  })

  return result
}

function DiningChoice() {
  const choicesRef = useRef(generateChoices(choicesWeight))
  const [choice, setChoice] = useState<String>()
  return (
    <Stack spacing={3}>
      <Heading size="lg">天街吃饭指南</Heading>
      <HStack spacing={5}>
        <Button onClick={() => setChoice(sample(choicesRef.current))} colorScheme="blue">今天吃啥？</Button>
        <Text>{choice}</Text>
      </HStack>
    </Stack>
  )
}
function App() {
  return (
    <Container maxW="container.md" my={5}>
      <Heading size="md" fontWeight="normal">
        <Flex>
          <Text my={1}>SJTU</Text>
          <Box pb="1rem" ml={1}><Logo size="1rem" /> </Box>
          <Text ml={1} my={1}>· Tools</Text>
        </Flex>
      </Heading>
      <Stack spacing={3} mt={5}>
        <DiningChoice></DiningChoice>
      </Stack>
    </Container>
  )
}

export default App

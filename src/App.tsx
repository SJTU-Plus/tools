import { Button } from '@chakra-ui/button'
import { Box, Container, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { sample } from 'lodash'
import React, { useState } from 'react'

import Logo from './Logo'

function DiningChoice() {
  const choices = [
    "肯德基",
    "汉堡王",
    "乐凯撒",
    "江边城外",
    "小菜园",
    "避风塘",
    "星伦多",
    "聚兴阁",
    "吴老九",
    "红魔",
    "捞王",
    "苏小柳",
    "韩宫宴",
    "发添",
    "佬肥猫",
    "萨莉亚",
    "肯塔尔",
    "西贝莜面村",
    "寿司沼津港",
    "谷田稻香",
    "金饭碗",
    "三鱼旨川",
    "鱼旨匠",
    "尚品天泰",
    "毕真"
  ]
  const [choice, setChoice] = useState<String>()
  return <Stack spacing={3}>
    <Heading size="lg">天街吃饭指南</Heading>
    <HStack spacing={5}>
      <Button onClick={() => setChoice(sample(choices))} colorScheme="blue">今天吃啥？</Button>
      <Text>{choice}</Text>
    </HStack>
  </Stack>
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

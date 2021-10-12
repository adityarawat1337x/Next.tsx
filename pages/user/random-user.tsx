import useSWR from "swr";
import {
  Center,
  Text,
  Box,
  useMediaQuery,
  Image,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import type { NextPage } from "next";

// export async function getStaticProps() {
//   // const data = await getRandomUser();
//   const res = await fetch("https://randomuser.me/api/");
//   const data = JSON.stringify(res);
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// }
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Random: NextPage = () => {
  const { data, error } = useSWR("https://randomuser.me/api/", fetcher, {
    refreshInterval: 0,
  });

  const [isSmall] = useMediaQuery("(max-width: 600px)");
  return (
    <Center backgroundColor="blue.300" height="100vh">
      <Box
        backgroundColor="white"
        padding={["15px", "30px"]}
        width="80%"
        height={["60%", "80%"]}
        boxShadow="2xl"
      >
        <Center width="100%" height="100%">
          <VStack>
            <Image
              borderRadius="full"
              boxSize={["150px", "200px"]}
              src={data ? data["results"][0].picture.large : ""}
              alt="Image"
            />
            <Text fontSize={["1em", "1.5em", "2em"]}>Hi, My name is</Text>
            <Text fontWeight="bold" fontSize={["1.3em", "2em", "3em"]}>
              {data
                ? data["results"][0].name.title +
                  " " +
                  data["results"][0].name.first +
                  " " +
                  data["results"][0].name.last
                : "Name"}
            </Text>
            <HStack spacing={["1.5", "3"]}>
              <Icon
                boxSize={["1.3em", "2em"]}
                src=" https://randomuser.me/api/portraits/med/women/46.jpg"
                alt="Image"
              />
              <Icon
                boxSize={["1.3em", "2em"]}
                src=" https://randomuser.me/api/portraits/med/women/46.jpg"
                alt="Image"
              />
              <Icon
                boxSize={["1.3em", "2em"]}
                src=" https://randomuser.me/api/portraits/med/women/46.jpg"
                alt="Image"
              />
            </HStack>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
};

export default Random;

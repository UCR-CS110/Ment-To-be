import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import RolesResourceCard from "./roles-resource-card";
import TechNewsResourceCard from "./tech-news-resource-card";
import CoursesResourceCard from "./courses-resource-card";


function ResourcesCore() {
    return (
      <SimpleGrid
        spacing={"20px"}
        columns={{ base: 1, md: 2, lg: 3 }}
        justifyContent={"space-evenly"}
      >
        <RolesResourceCard></RolesResourceCard>
        <CoursesResourceCard></CoursesResourceCard>
        <TechNewsResourceCard></TechNewsResourceCard>
      </SimpleGrid>
    );
  }
  
  export default ResourcesCore;
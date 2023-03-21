import { useState } from 'react';
import { db } from "./Data";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

const FilteredList = () => {
  const [category, setCategory] = useState('all');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredItems = db.filter((item) => {
    if (category === 'all') {
      return true;
    } else {
      return item.category === category;
    }
  });

  return (
    <div>
      <label>
        Filter by category:
        <select value={category} onChange={handleChange}>
          <option value="all">All</option>
          <option value="peinture">Peinture</option>
          <option value="manga">Manga</option>
          <option value="abstrait">Abstrait</option>
          <option value="noir et blanc">Noir et blanc</option>
          <option value="animaux">Animaux</option>
        </select>
      </label>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {filteredItems.map((item) => (
          <GridItem key={item.id}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={item.url} alt={item.name} />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl" mr={2}>
                    {item.name}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    {item.category}
                  </Text>
                </Box>

                <Box>
                  <Text mt={2} color="gray.600">
                    {item.description}
                  </Text>
                </Box>

                <Box d="flex" mt={2} alignItems="center">
                  <Text fontWeight="semibold" fontSize="xl">
                    {item.price} €
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default FilteredList;

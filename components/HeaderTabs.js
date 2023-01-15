import { View, FlatList } from "react-native";
import React from "react";
import { styled } from "nativewind";

const Container = styled(View, "absolute bottom-3 right-0");
const ContainerTabs = styled(View, "flex-row justify-evenly flex-1 w-4");
const Tab = styled(View, "w-2 h-2 rounded-full border");
const TabSelected = styled(View, "w-2 h-2 rounded-full bg-[#00baa4] border");

const HeaderTabs = ({ indexSlideActive, data }) => {
  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={data}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ index }) => (
          <ContainerTabs>
            {indexSlideActive === index + 1 ? <TabSelected /> : <Tab />}
          </ContainerTabs>
        )}
      />
    </Container>
  );
};

export default HeaderTabs;

import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, FlatList, Text, StatusBar } from 'react-native';

export function ListScreen({ navigation }: { navigation: any }) {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // TASK 2: Implement your solution here
  };

  const navigateToDetails = () => {
    // TASK 3: Implement your solution here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      {isLoading && (
        <ActivityIndicator size="large" />
      )}
      {!isLoading && (
        <FlatList
          data={breeds}
          renderItem={({ item }) => <Text onPress={() => navigateToDetails()} style={styles.item}>{item}</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
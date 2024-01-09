import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, FlatList, Text, Image, StatusBar } from 'react-native';

export function DetailsScreen({ route, navigation }: { route: any; navigation: any }) {
  const { breed } = route.params;
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // TASK 4: Implement your solution here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {isLoading && (
        <ActivityIndicator size="large" />
      )}
      {!isLoading && (
        // TASK 4: Implement your solution here
        <></>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    image: {
      width: 200,
      height: 200,
    },
});
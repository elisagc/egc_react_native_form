import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {TextDecoration} from '../components/TextDecoration';
import {useSelector} from 'react-redux';

export const SubmissionsScreen = () => {
  const {submissions} = useSelector(state => state.form);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {submissions.map((submission, index) => {
        return (
          <View key={index} style={styles.item}>
            <View>
              <Text style={[styles.title, styles.bold]}>
                Submission: {index + 1}
              </Text>
              <TextDecoration />
            </View>

            {Object.entries(submission).map(([key, value]) => {
              return (
                <Text key={key} style={styles.bold}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
                  <Text style={styles.normal}>{value}</Text>
                </Text>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  item: {
    backgroundColor: 'rgba(102, 205, 170,.3)',
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    color: 'rgba(219,112,147,.7)',
  },
  bold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export type ListItemProps = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  device_age: number;
};

export const ListItem: FC<ListItemProps> = ({
  id,
  first_name,
  last_name,
  avatar,
  device_age,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} src={avatar} />
      <Text>{`${first_name} ${last_name}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 8, alignItems: 'center'},
  image: {height: 100, width: 100},
});

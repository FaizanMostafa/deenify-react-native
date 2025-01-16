import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import verseBullet from '../../assets/images/verse.png';
import {theme} from '../theme';
import type {Supplication} from '../types/supplication.type';
import data from '../data/quranic-supplications.json';

const Supplications = () => {
  return (
    <FlashList
      data={data}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}: {item: Supplication}) => (
        <View style={styles.verseContainer}>
          <Text style={styles.verse}>
            <Image
              source={verseBullet}
              resizeMode="contain"
              style={styles.verseBullet}
            />
            <Text>{item.content_ar}</Text>
          </Text>
          <Text style={styles.translation}>{item.trans_ur}</Text>
          <Text
            style={
              styles.reference
            }>{`${item.surah_name_ar} (${item.verse_no})`}</Text>
        </View>
      )}
      estimatedItemSize={100}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  verseContainer: {
    backgroundColor: theme.background.colors.white,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: theme.border.colors.ashWhite,
  },
  verse: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 34,
    fontFamily: theme.typography.font.families.arabic,
    textAlign: 'right',
    lineHeight: 45,
  },
  translation: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 24,
    marginTop: 10,
    fontFamily: theme.typography.font.families.urdu,
    textAlign: 'right',
    lineHeight: 35,
  },
  reference: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'right',
    fontFamily: theme.typography.font.families.arabic,
  },
  verseBullet: {
    width: 40,
    height: 20,
    marginLeft: 10,
    marginTop: 8,
  },
});

export default Supplications;

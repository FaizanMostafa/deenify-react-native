import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import supplications from '../data/quranic-supplications.json';
import verseBullet from '../../assets/images/verse.png';

const Navigation = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.verses}>
        {supplications.length &&
          supplications.map((supplication, index) => (
            <View style={styles.verseContainer} key={index}>
              <Text style={styles.verse}>
                <Image
                  source={verseBullet}
                  resizeMode="contain"
                  style={styles.verseBullet}></Image>
                <Text>{supplication.content_ar}</Text>
              </Text>
              <Text style={styles.translation}>{supplication.trans_ur}</Text>
              <Text
                style={
                  styles.reference
                }>{`${supplication.surah_name_ar} (${supplication.verse_no})`}</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#f8f8f8',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#808080',
  },
  container: {
    backgroundColor: '#f8f8f8',
  },
  verses: {
    padding: 20,
    paddingBottom: 10,
  },
  verseContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  verse: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 34,
    fontFamily: 'AlQalamQuran',
    textAlign: 'right',
    lineHeight: 45,
  },
  translation: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 24,
    marginTop: 10,
    fontFamily: 'AlQalamNastaleeq',
    textAlign: 'right',
    lineHeight: 35,
  },
  reference: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'right',
    fontFamily: 'AlQalamQuran',
  },
  verseBullet: {
    width: 40,
    height: 20,
    marginLeft: 10,
    marginTop: 8,
  },
});

export default Navigation;

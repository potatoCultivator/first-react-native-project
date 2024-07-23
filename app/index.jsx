import { 
  Text, 
  ScrollView, 
  View, 
  Image} from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
// import { CustomBotton } from '../components';
import CustomBotton from '../components/CustomBotton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center h-full, px-4">
          <Image 
          source={images.logo} 
          className="w-[130px] h-[84px]" 
          resizeMode='contain'/>

          <Image
          source={images.cards}
          className="max-w-[300px] w-full h-[300px]"
          resizeMode='contain'/>

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center ">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image 
            source={images.path}
            className="w-[130px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode='contain'/>
          </View>
          <Text className="text-sm font-pregurlar text-gray-100 mt-7 text-center">Where creativity meets innovatio: embark on a journey of limitless exploration with Aora</Text>
          {/* <CustomBotton/> */}
          <CustomBotton
          title="continue with Emial"
          handlePress={ () => {}}
          containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
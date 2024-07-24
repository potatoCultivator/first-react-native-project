import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomBotton from '../../components/CustomBotton';
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({ 
    username: '',
    email: '', 
    password: '' })

  const submit = () => {
    console.log(form)
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        {/* <View className="w-full justify-center h-full px-4 my-6"> */}
        <View className="w-full justify-center min-h-[84vh] px-4 my-6">
          <Image 
          source={images.logo} 
          className="w-[115px] h-[35px]" 
          resizeMode='contain'/>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to Aora
          </Text>

          <FormField 
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-10"
          />

          <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"/>

          <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"/>
          
          <CustomBotton 
          title="Sign In" 
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}/>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            {/* <Text className="text-sm text-secondary-200 font-pmedium">
              Sign Up
            </Text> */}
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
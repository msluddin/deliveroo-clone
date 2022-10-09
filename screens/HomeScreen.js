import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="w-7 h-7 p-4 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
          <Text className="font-bold text-xl">
            Current Location
            <FontAwesome name="chevron-down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <FontAwesome name="user-o" size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <FontAwesome name="search" color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <FontAwesome name="sort-amount-asc" size={25} color="#00CCBB" />
      </View>

      {/* Body Content */}
      <ScrollView className="bg-gray-100">
        {/*Category */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everybody's been enjoying these juicy discounts"
        />

        {/* Offer near you */}
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;

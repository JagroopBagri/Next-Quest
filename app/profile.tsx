import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { theme } from "../styles/theme";
import { commonStyles } from "@/styles/commonStyles";

export default function Profile() {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>Jane Smith</Text>
        <Text style={styles.subText}>Travel Enthusiast</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>34</Text>
          <Text style={styles.statLabel}>Photos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Itineraries</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Uploaded Photos</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.photosContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.photo}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Reviews</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviewsContainer}>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewTitle}>Cozy Café</Text>
          <Text style={styles.reviewText}>
            "Great ambiance and delicious pastries!"
          </Text>
        </View>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewTitle}>Grand Hotel</Text>
          <Text style={styles.reviewText}>
            "Luxurious stay with exceptional service."
          </Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Saved Itineraries</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itinerariesContainer}>
        <View style={styles.itineraryItem}>
          <Text style={styles.itineraryTitle}>Weekend in Paris</Text>
          <Text style={styles.itineraryText}>
            Explore the romantic city with this 3-day itinerary.
          </Text>
        </View>
        <View style={styles.itineraryItem}>
          <Text style={styles.itineraryTitle}>Adventure in the Rockies</Text>
          <Text style={styles.itineraryText}>
            Hiking and exploring the beautiful Rocky Mountains.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: { fontSize: 24, fontWeight: "bold" },
  subText: { fontSize: 16, color: "gray" },
  editProfileButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
  },
  editProfileText: { color: "#fff", fontWeight: "bold" },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: { alignItems: "center" },
  statNumber: { fontSize: 20, fontWeight: "bold" },
  statLabel: { fontSize: 14, color: "gray" },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  viewAllText: { color: theme.colors.primary, fontWeight: "bold" },
  photosContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  photo: { width: 80, height: 80, borderRadius: 10 },
  reviewsContainer: { marginHorizontal: 20 },
  reviewItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  reviewTitle: { fontSize: 16, fontWeight: "bold" },
  reviewText: { fontSize: 14, color: "gray" },
  itinerariesContainer: { marginHorizontal: 20 },
  itineraryItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  itineraryTitle: { fontSize: 16, fontWeight: "bold" },
  itineraryText: { fontSize: 14, color: "gray" },
});

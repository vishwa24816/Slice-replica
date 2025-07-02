import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const DashboardScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Good morning, User!</Text>
        {/* Replace with an icon later */}
        <TouchableOpacity onPress={() => alert('Profile/Settings Tapped!')}>
          <Text style={styles.profileIcon}>P</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Balance</Text>
        <Text style={styles.balanceText}>₹1,23,456.78</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => alert('Add Money Tapped!')}>
          <Text style={styles.ctaButtonText}>Add Money</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('Payments')}>
            <Text>Scan & Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('Transactions')}>
            <Text>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction} onPress={() => alert('Offers Tapped!')}>
            <Text>Offers</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {/* Placeholder for recent transactions list */}
        <View style={styles.transactionItem}>
          <Text>Swiggy</Text>
          <Text>- ₹350</Text>
        </View>
        <View style={styles.transactionItem}>
          <Text>Amazon</Text>
          <Text>- ₹1200</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
          <Text style={styles.viewAllText}>View All Transactions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileIcon: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#F94C84',
    color: '#fff',
    borderRadius: 20,
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ctaButton: {
    backgroundColor: '#F94C84',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickAction: {
    alignItems: 'center',
    padding: 10,
    // Add styling for icons if you use them
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  viewAllText: {
    color: '#F94C84',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  }
});

export default DashboardScreen;

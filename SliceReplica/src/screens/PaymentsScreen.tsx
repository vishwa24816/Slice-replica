import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const PaymentsScreen = () => {
  const handlePaymentAction = (action: string) => {
    Alert.alert('Action Tapped', `You tapped on: ${action}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payments</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentAction('Scan & Pay')}>
          {/* Replace with Icon later */}
          <Text style={styles.optionIcon}>📷</Text>
          <Text style={styles.optionText}>Scan & Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentAction('Pay to Contacts')}>
          {/* Replace with Icon later */}
          <Text style={styles.optionIcon}>👤</Text>
          <Text style={styles.optionText}>Pay to Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentAction('Bank Transfer')}>
          {/* Replace with Icon later */}
          <Text style={styles.optionIcon}>🏦</Text>
          <Text style={styles.optionText}>Bank Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentAction('UPI ID / Number')}>
          {/* Replace with Icon later */}
          <Text style={styles.optionIcon}>💳</Text>
          <Text style={styles.optionText}>UPI ID / Number</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentAction('Bill Payments')}>
          {/* Replace with Icon later */}
          <Text style={styles.optionIcon}>📄</Text>
          <Text style={styles.optionText}>Bill Payments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  paymentOption: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  optionIcon: {
    fontSize: 24, // Placeholder for icon size
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
  }
});

export default PaymentsScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mockTransactions = [
  { id: '1', date: '2024-07-20', description: 'Swiggy Order', amount: -350.00, type: 'Food' },
  { id: '2', date: '2024-07-19', description: 'Amazon Shopping', amount: -1200.50, type: 'Shopping' },
  { id: '3', date: '2024-07-19', description: 'Salary Credit', amount: 50000.00, type: 'Income' },
  { id: '4', date: '2024-07-18', description: 'Uber Ride', amount: -150.00, type: 'Travel' },
  { id: '5', date: '2024-07-17', description: 'Netflix Subscription', amount: -199.00, type: 'Bills' },
  { id: '6', date: '2024-07-16', description: 'Zomato Gold', amount: -799.00, type: 'Subscription' },
  { id: '7', date: '2024-07-15', description: 'Cashback Received', amount: 50.00, type: 'Cashback' },
];

const TransactionsScreen = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.transactionItem}>
      <View>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date} - {item.type}</Text>
      </View>
      <Text style={[styles.amount, item.amount > 0 ? styles.credit : styles.debit]}>
        ₹{item.amount.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Transactions</Text>
        {/* Add filter/search icons later */}
      </View>
      <FlatList
        data={mockTransactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
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
    alignItems: 'center', // Center title for now
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  }
});

export default TransactionsScreen;

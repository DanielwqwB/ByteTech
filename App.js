import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import './css/css'

// Import your styles
import styles from './EnviAnalyticsStyles'; 

const EnviAnalyticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ENVI Analytics</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-sharp" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Date Dropdown */}
        <TouchableOpacity style={styles.dateSelector}>
          <Text style={styles.dateText}>January 2026</Text>
          <Ionicons name="chevron-down" size={20} color="#333" />
        </TouchableOpacity>

        {/* 2x2 Stats Grid */}
        <View style={styles.gridContainer}>
          <View style={styles.statCard}>
            <View style={[styles.iconCircle, { backgroundColor: '#FFEBEE' }]}>
              <MaterialCommunityIcons name="thermometer" size={24} color="#EF5350" />
            </View>
            <Text style={styles.statValue}>670</Text>
            <Text style={styles.statLabel}>Heat Stress Cases</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.iconCircle, { backgroundColor: '#FFF3E0' }]}>
              <MaterialCommunityIcons name="cloud-outline" size={24} color="#FFB74D" />
            </View>
            <Text style={styles.statValue}>120</Text>
            <Text style={styles.statLabel}>Emission Tons (Top 20%)</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.iconCircle, { backgroundColor: '#E3F2FD' }]}>
              <MaterialCommunityIcons name="clipboard-check-outline" size={24} color="#64B5F6" />
            </View>
            <Text style={styles.statValue}>45%</Text>
            <Text style={styles.statLabel}>Inspection Drop</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.iconCircle, { backgroundColor: '#E8F5E9' }]}>
              <FontAwesome5 name="users" size={20} color="#66BB6A" />
            </View>
            <Text style={styles.statValue}>8932</Text>
            <Text style={styles.statLabel}>Users</Text>
          </View>
        </View>

        {/* List Section Title */}
        <Text style={styles.sectionTitle}>Top 5 Barangays by Carbon Emission</Text>

        {/* List Container */}
        <View style={styles.listContainer}>
          <BarangayRow rank="1" color="#D32F2F" name="San Francisco" value="265 Tons" percentage="100%" />
          <BarangayRow rank="2" color="#F57C00" name="Villanueva Ave." value="255 Tons" percentage="95%" />
          <BarangayRow rank="3" color="#FFB74D" name="Dayangdang" value="250 Tons" percentage="92%" />
          <BarangayRow rank="4" color="#D4E157" name="Tabuco" value="195 Tons" percentage="70%" />
          <BarangayRow rank="5" color="#66BB6A" name="Villanueva Ave." value="190 Tons" percentage="68%" />
        </View>

        {/* Footer Summary */}
        <View style={styles.footerContainer}>
          <View style={styles.footerHeaderRow}>
            <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#555" />
            <Text style={styles.footerDateText}> January 2026</Text>
          </View>
          
          <View style={styles.footerStatsRow}>
            <MaterialCommunityIcons name="arrow-up-bold" size={32} color="#66BB6A" />
            <Text style={styles.footerBigNumber}>350</Text>
            <Text style={styles.footerUnit}> Tons Total CO2</Text>
          </View>

          <View style={styles.footerBadgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>➜ 1%</Text>
            </View>
            <Text style={styles.badgeContext}>Compared to December 2025</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const BarangayRow = ({ rank, color, name, value, percentage }) => (
  <View style={styles.rowContainer}>
    <View style={[styles.rankCircle, { backgroundColor: color }]}>
      <Text style={styles.rankText}>{rank}</Text>
    </View>
    <View style={styles.rowContent}>
      <View style={styles.rowHeader}>
        <Text style={styles.rowName}>{name}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: percentage, backgroundColor: color }]} />
      </View>
    </View>
  </View>
);

export default EnviAnalyticsScreen;
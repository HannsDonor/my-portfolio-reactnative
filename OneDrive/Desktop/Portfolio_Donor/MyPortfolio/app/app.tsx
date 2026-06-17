import { getHeaderTitle } from '@react-navigation/elements';
import { View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import { Image } from 'react-native'
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';  

export default function App() {
  return (
    

    <ScrollView style={styles.container}>
        <View style={{
          marginTop: 30,
          alignItems: 'baseline',
          paddingLeft: 30,
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}> My Portfolio </Text>
        </View>


          <View style={styles.headerSection}>
            <Image 
              source={require('@/assets/images/profilepic.jpg')}
              style={styles. profileImage}
            />
          <View style={styles.nameTaglineContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 20, margin: 10}}> Hanns Christian L. Donor</Text>
            <Text style={{'fontSize': 20, fontStyle: 'italic'}}> All Pain No Gain </Text>
          </View> 
        </View>
        <View style={styles.line}></View>

        <View style={styles.aboutMeContainer}>
          <Text style={styles.Subtitle}>About Me </Text>
          <Text style={styles.aboutText}>I am an aspiring Software Developer with a strong interest in Python, machine learning, and software engineering. I enjoy building applications that solve real-world problems and continuously improving my skills through hands-on projects. Passionate about learning new technologies, I strive to create efficient, user-focused solutions while growing as a developer in the ever-evolving world of technology.</Text>

          <Text style={styles.Subtitle}>Skills Matrix</Text>

          <View style={styles.section}>

          <View style={styles.skillsContainer}>

            <View style={styles.skillChip}>
              <FontAwesome name="code" size={16} color="#3776AB" />
              <Text style={styles.skillText}>Python</Text>
            </View>

            <View style={styles.skillChip}>
              <MaterialIcons name="code" size={16} color="#333" />
              <Text style={styles.skillText}>PHP</Text>
            </View>

            <View style={styles.skillChip}>
              <Ionicons name="logo-javascript" size={16} color="#F7DF1E" />
              <Text style={styles.skillText}>JavaScript</Text>
            </View>

            <View style={styles.skillChip}>
              <FontAwesome name="cogs" size={16} color="#555" />
              <Text style={styles.skillText}>C++</Text>
            </View>

            <View style={styles.skillChip}>
              <MaterialIcons name="storage" size={16} color="#4A90E2" />
              <Text style={styles.skillText}>MySQL</Text>
            </View>

            <View style={styles.skillChip}>
              <Ionicons name="server-outline" size={16} color="#000" />
              <Text style={styles.skillText}>Backend Dev</Text>
            </View>
          </View>
        </View>

        <Text style={styles.Subtitle}>Project List</Text>

        <View style={styles.section}>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>Truck & Delivery System</Text>
          <Text style={styles.projectDesc}>
            A desktop-based system developed in NetBeans that manages inventory and delivery operations efficiently with database integration.
          </Text>
          <Text style={styles.projectStack}>JavaScript - MySQL - NetBeans</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>HairConnect – Haircut Suggestion System</Text>
          <Text style={styles.projectDesc}>
            An AI-powered web system that analyzes facial features and hair to recommend suitable hairstyles.
          </Text>
          <Text style={styles.projectStack}>HTML - CSS - JavaScript - PHP - Python - MySQL</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>PaprintPo – Remote Printing Service</Text>
          <Text style={styles.projectDesc}>
            A web application that allows users to send and manage print requests remotely with database-driven processing.
          </Text>
          <Text style={styles.projectStack}>HTML - CSS - JavaScript - PHP - MySQL</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>GameShop – Online Game Store Platform</Text>
          <Text style={styles.projectDesc}>
            A NetBeans-based e-commerce application for browsing and purchasing games with database support and interactive user features.
          </Text>
          <Text style={styles.projectStack}>JavaScript - MySQL - NetBeans</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Me</Text>

          <Pressable
            style={styles.contactButton}
            onPress={() => alert('Email: 23-77767@g.batstate-u.edu.ph')}
          >
            <Text style={styles.contactButtonText}>Contact Me</Text>
          </Pressable>
        </View>

      </View>
      
          
        </View>
        
        
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginBottom: 75
  },

  portfolioCard: {
    flexDirection: 'column'
  },
  
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },

  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 2,
    marginLeft: 20,
  },

  nameTaglineContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    padding: 20
  },

  line: {
    height: 3,
    width: '95%',
    backgroundColor: 'black',
    margin: 10
  },

  aboutMeContainer: {
    flexDirection: 'column',
    
  },

  Subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    padding: 10,
    color: 'white',
    borderRadius: 10
  },

    section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skillChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  skillText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },

  card: {
    backgroundColor: '#F7F7F7',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    elevation: 3,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#111',
  },

  projectDesc: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },

  projectStack: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
    marginTop: 4,
  },

  contactButton: {
  backgroundColor: 'lightblue',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 20,
  alignItems: 'center',
  marginTop: 10,
},

contactButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
});
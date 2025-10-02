import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,             
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#f0f2f5'
  },
  title:{ 
    fontSize:32, 
    fontWeight:'bold', 
    color:"#5456a3ff",
    justifyContent:'center' 
  }, 
  subtitle:{ 
    marginVertical:16, 
    fontSize:16, 
    color:"#319c6aff", 
    fontStyle:'italic' 
  }, 
  input:{ 
    paddingHorizontal:16,
    borderRadius:10, 
    height:50, 
    width:'100%', 
    backgroundColor:'white', 
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor:'#333'
  }, 
  button:{ 
    height:45,
    width:'90%',
    marginVertical:16,
    borderRadius:10, 
    alignItems:'center', 
    justifyContent:'center' 
  },
  container_card: {
    alignItems: "center",
    paddingVertical: 8,
    width: "100%"
  },
  card: {
    width: "100%",
    maxWidth: 350,
    borderRadius: 16,
    elevation: 4,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerCard: {
    padding: 8,
    backgroundColor: "transparent",
  },
  title_card: {
    padding: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  content: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 8,
  },
  button_copy: {
    margin: 2,
  },
  listItem: {
    marginBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3d3e81",
    marginBottom: 4,
  },
  listDesc: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  motiStyle:{ 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 16
  }

});

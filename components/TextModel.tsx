import { Box, Button, FormControl, Heading, Input, ScrollView, View, VStack } from "native-base";
import React, { useState } from "react";
import { ToastAndroid } from "react-native";

const TextModel: React.FC = () => {
    
    const[refName, setRefName] = useState("");
    
    const signup = () => {
        
        ToastAndroid.show("Ciao premuto "+refName, ToastAndroid.SHORT);
        
    }
    return (
       
    <Box safeArea p="2" py="8" w="90%" maxW="290"> 
        <FormControl >
          <Heading mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="lg">Hello World</Heading>
                <FormControl.Label>Nome</FormControl.Label>
                <Input onChangeText={refName=> setRefName(refName)} type="text" />
                <FormControl.Label>Cognome</FormControl.Label>
                <Input/>

                <FormControl.Label>Numero di tel</FormControl.Label>
                <Input type="number"  keyboardType="numeric"/>
                <Button mt="2" colorScheme="indigo" onPress={signup}>
                    Registrati
                </Button>

        </FormControl>
    </Box>
      
    );
  };
  
  export default TextModel;


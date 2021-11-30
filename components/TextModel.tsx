import { Box, Button, FormControl, Heading, Input, ScrollView, View, VStack } from "native-base";
import React, { useState } from "react";
import { ToastAndroid } from "react-native";

const TextModel: React.FC = () => {
    
    const[refName, setRefName] = useState("");
    const[refCognome, setRefCognome] = useState("");
    const[refNumber, setRefNumber] = useState("");
    
    const signup = () => {
      const inscritto = {
         nome: refName,
         cognome: refCognome,
         numero: refNumber
      }  

        fetch('https://localhost:8080/API', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inscritto)
        }).then(res=> ToastAndroid.show(res+"Ti sei iscritto", ToastAndroid.SHORT)).catch(err=> ToastAndroid.show("Non ti sei iscritto perché "+err, ToastAndroid.LONG));
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
                <Input onChangeText={pizza=> setRefName(pizza)} type="text" />
                <FormControl.Label>Cognome</FormControl.Label>
                <Input onChangeText={pizza=> setRefCognome(pizza)} type="text" />

                <FormControl.Label>Numero di tel</FormControl.Label>
                <Input type="number"  keyboardType="numeric" onChangeText={pizza => setRefNumber(pizza)}/>
                <Button mt="2" colorScheme="indigo" onPress={signup}>
                    Registrati
                </Button>

        </FormControl>
    </Box>
      
    );
  };
  
  export default TextModel;


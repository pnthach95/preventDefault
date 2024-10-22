import {useCallback, useEffect, useState} from 'react';
import {GiftedChat, type IMessage} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChatScreen = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <GiftedChat
        isStatusBarTranslucentAndroid
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{_id: 1}}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

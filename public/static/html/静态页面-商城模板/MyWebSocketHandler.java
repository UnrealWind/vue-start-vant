package com.example.wxpaydemo.socket;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@Component
public class MyWebSocketHandler implements WebSocketHandler {
 
	public static final Map<String, WebSocketSession> userSocketSessionMap;
 
	static {
        userSocketSessionMap = new HashMap<String, WebSocketSession>();
	}
	
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		String id = (String) session.getAttributes().get("id");
		userSocketSessionMap.put("id",session);
		session.sendMessage(new TextMessage("sssssss"));
	}
 
	@Override
	public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {

	}
 
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {

	}
 
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {

	}
 
	@Override
	public boolean supportsPartialMessages() {

		return false;
	}
	}

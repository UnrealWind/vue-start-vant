package com.example.wxpaydemo.socket;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import java.util.Map;

public class HandShake implements HandshakeInterceptor {
 
	@Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
								   Map<String, Object> attributes) throws Exception {
		// TODO Auto-generated method stub
		String jspCode = ((ServletServerHttpRequest) request).getServletRequest().getParameter("jspCode");
		// 标记用户
		//String userId = (String) session.getAttribute("userId");
		if(jspCode!=null){
			attributes.put("jspCode", jspCode);
		}else{
			return false;
		}
		return true;
	}
 
	@Override
	public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
			Exception exception) {
		// TODO Auto-generated method stub
		
	}
 
}
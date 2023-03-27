package com.record.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class Logincontroller {



	@GetMapping("/login")
	public String home3() {
		return "login";
	}
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
}

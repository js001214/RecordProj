package com.record.cList.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CListController {
	
	@GetMapping("/")
	public String index() {
		
		return "company/cList";
	}
	
}

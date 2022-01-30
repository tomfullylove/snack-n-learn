//
//  SwiftUIButtonProxy.swift
//  Veygo
//
//  Created by Tom Fullylove on 30/01/2022.
//

import SwiftUI

@objcMembers class SwiftUIButtonProxy: NSObject {
  private var vc = UIHostingController(rootView: SwiftUIButton())
  
  static let storage = NSMutableDictionary()
  
  var view: UIView {
    return vc.view
  }
}

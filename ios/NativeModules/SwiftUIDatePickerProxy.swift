//
//  SwiftUIDatePickerProxy.swift
//  Veygo
//
//  Created by Tom Fullylove on 30/01/2022.
//

import SwiftUI

@objcMembers class SwiftUIDatePickerProxy: NSObject {
  private var vc = UIHostingController(rootView: SwiftUIDatePicker())

  static let storage = NSMutableDictionary()

  var view: UIView {
    return vc.view
  }
}

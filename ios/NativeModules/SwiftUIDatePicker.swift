//
//  SwiftUIDatePicker.swift
//  Veygo
//
//  Created by Tom Fullylove on 30/01/2022.
//

import SwiftUI

struct SwiftUIDatePicker : View {


  @State private var date = Date().addingTimeInterval(TimeInterval(60.0 * 60.0 * 2.0))

  var body: some View {
      DatePicker(
          "Start Date",
          selection: $date,
          displayedComponents: [.date, .hourAndMinute]
      )
      .datePickerStyle(.graphical)
  }
}

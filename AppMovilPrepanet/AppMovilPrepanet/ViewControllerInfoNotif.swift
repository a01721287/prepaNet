//
//  ViewControllerInfoNotif.swift
//  AppMovilPrepanet
//
//  Created by alex on 19/10/22.
//
/*
    Información detallada de la notificiación
 */

import UIKit
import Firebase

class ViewControllerInfoNotif: UIViewController {
    
    @IBOutlet weak var lbTitulo: UILabel!
    @IBOutlet weak var textMsg: UITextView!
    @IBOutlet weak var lbAutor: UILabel!
    
    var notif:notificacion!
    var autor:String!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        lbTitulo.text = notif.titulo
        notif.autor_id.getDocument  { DocumentSnapshot, error in
            if let error = error {
                print("Inscripcion Error" + error.localizedDescription)
            }
            
            self.lbAutor.text = (DocumentSnapshot?.data()!["nombre"] as! String)
        }
        textMsg.text = notif.contenido
    }
    
    @IBAction func dismiss(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
}

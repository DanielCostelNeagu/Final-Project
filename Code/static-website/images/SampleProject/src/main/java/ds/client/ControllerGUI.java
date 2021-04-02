package ds.client;

import java.awt.Dimension;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.EmptyBorder;

import ds.service1.Service1Grpc;
import ds.service2.Service2Grpc;
import ds.service3.Service3Grpc;
import ds.service4.Service4Grpc;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;


public class ControllerGUI implements ActionListener{


	private JTextField entry1, reply1;
	private JTextField entry2, reply2;
	private JTextField entry3, reply3;
	private JTextField entry4, reply4;


	private JPanel getService1JPanel() {

		JPanel panel = new JPanel();

		BoxLayout boxlayout = new BoxLayout(panel, BoxLayout.X_AXIS);

		JLabel label = new JLabel("Enter value")	;
		panel.add(label);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));
		entry1 = new JTextField("",10);
		panel.add(entry1);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		JButton button = new JButton("Invoke Service 1");
		button.addActionListener(this);
		panel.add(button);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		reply1 = new JTextField("", 10);
		reply1 .setEditable(false);
		panel.add(reply1 );

		panel.setLayout(boxlayout);

		return panel;

	}

	private JPanel getService2JPanel() {

		JPanel panel = new JPanel();

		BoxLayout boxlayout = new BoxLayout(panel, BoxLayout.X_AXIS);

		JLabel label = new JLabel("Enter value")	;
		panel.add(label);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));
		entry2 = new JTextField("",10);
		panel.add(entry2);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		JButton button = new JButton("Invoke Service 2");
		button.addActionListener(this);
		panel.add(button);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		reply2 = new JTextField("", 10);
		reply2 .setEditable(false);
		panel.add(reply2 );

		panel.setLayout(boxlayout);

		return panel;

	}

	private JPanel getService3JPanel() {

		JPanel panel = new JPanel();

		BoxLayout boxlayout = new BoxLayout(panel, BoxLayout.X_AXIS);

		JLabel label = new JLabel("Enter value")	;
		panel.add(label);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));
		entry3 = new JTextField("",10);
		panel.add(entry3);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		JButton button = new JButton("Invoke Service 3");
		button.addActionListener(this);
		panel.add(button);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		reply3 = new JTextField("", 10);
		reply3 .setEditable(false);
		panel.add(reply3 );

		panel.setLayout(boxlayout);

		return panel;

	}

	private JPanel getService4JPanel() {

		JPanel panel = new JPanel();

		BoxLayout boxlayout = new BoxLayout(panel, BoxLayout.X_AXIS);

		JLabel label = new JLabel("Enter value")	;
		panel.add(label);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));
		entry4 = new JTextField("",10);
		panel.add(entry4);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		JButton button = new JButton("Invoke Service 4");
		button.addActionListener(this);
		panel.add(button);
		panel.add(Box.createRigidArea(new Dimension(10, 0)));

		reply4 = new JTextField("", 10);
		reply4 .setEditable(false);
		panel.add(reply4 );

		panel.setLayout(boxlayout);

		return panel;

	}
	public static void main(String[] args) {

		ControllerGUI gui = new ControllerGUI();

		gui.build();
	}

	private void build() { 

		JFrame frame = new JFrame("Service Controller Sample");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		// Set the panel to add buttons
		JPanel panel = new JPanel();

		// Set the BoxLayout to be X_AXIS: from left to right
		BoxLayout boxlayout = new BoxLayout(panel, BoxLayout.Y_AXIS);

		panel.setLayout(boxlayout);

		// Set border for the panel
		panel.setBorder(new EmptyBorder(new Insets(50, 100, 50, 100)));
	
		panel.add( getService1JPanel() );
		panel.add( getService2JPanel() );
		panel.add( getService3JPanel() );
		panel.add( getService4JPanel() );

		// Set size for the frame
		frame.setSize(300, 300);

		// Set the window to be visible as the default to be false
		frame.add(panel);
		frame.pack();
		frame.setVisible(true);
	}


	@Override
	public void actionPerformed(ActionEvent e) {
		JButton button = (JButton)e.getSource();
		String label = button.getActionCommand();  

		if (label.equals("Invoke Service 1")) {
			System.out.println("service 1 to be invoked ...");

		
			/*
			 * 
			 */
			ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 50051).usePlaintext().build();
			Service1Grpc.Service1BlockingStub blockingStub = Service1Grpc.newBlockingStub(channel);

			//preparing message to send
			ds.service1.RequestMessage request = ds.service1.RequestMessage.newBuilder().setText(entry1.getText()).build();

			//retreving reply from service
			ds.service1.ResponseMessage response = blockingStub.service1Do(request);

			reply1.setText( String.valueOf( response.getLength()) );
		
		}else if (label.equals("Invoke Service 2")) {
			System.out.println("service 2 to be invoked ...");

		
			/*
			 * 
			 */
			ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 50052).usePlaintext().build();
			Service2Grpc.Service2BlockingStub blockingStub = Service2Grpc.newBlockingStub(channel);

			//preparing message to send
			ds.service2.RequestMessage request = ds.service2.RequestMessage.newBuilder().setText(entry2.getText()).build();

			//retreving reply from service
			ds.service2.ResponseMessage response = blockingStub.service2Do(request);

			reply2.setText( String.valueOf( response.getLength()) );
			
		}else if (label.equals("Invoke Service 3")) {
			System.out.println("service 3 to be invoked ...");

		
			/*
			 * 
			 */
			ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 50053).usePlaintext().build();
			Service3Grpc.Service3BlockingStub blockingStub = Service3Grpc.newBlockingStub(channel);

			//preparing message to send
			ds.service3.RequestMessage request = ds.service3.RequestMessage.newBuilder().setText(entry3.getText()).build();

			//retreving reply from service
			ds.service3.ResponseMessage response = blockingStub.service3Do(request);

			reply3.setText( String.valueOf( response.getLength()) );
		
		}else if (label.equals("Invoke Service 4")) {
			System.out.println("service 4 to be invoked ...");

		
			/*
			 * 
			 */
			ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 50054).usePlaintext().build();
			Service4Grpc.Service4BlockingStub blockingStub = Service4Grpc.newBlockingStub(channel);

			//preparing message to send
			ds.service4.RequestMessage request = ds.service4.RequestMessage.newBuilder().setText(entry4.getText()).build();

			//retreving reply from service
			ds.service4.ResponseMessage response = blockingStub.service4Do(request);

			reply4.setText( String.valueOf( response.getLength()) );
		
		}else{
			
		}

	}

}

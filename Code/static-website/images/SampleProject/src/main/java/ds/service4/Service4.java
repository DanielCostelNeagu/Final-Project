package ds.service4;

import java.io.IOException;

import ds.service4.Service4Grpc.Service4ImplBase;
import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;


public class Service4 extends Service4ImplBase{



	public static void main(String[] args) throws InterruptedException, IOException {
		Service4 service1 = new Service4();

		int port = 50054;

		Server server = ServerBuilder.forPort(port)
				.addService(service1)
				.build()
				.start();

		System.out.println("Service-4 started, listening on " + port);

		server.awaitTermination();
	}


	@Override
	public void service4Do(RequestMessage request, StreamObserver<ResponseMessage> responseObserver) {

		//prepare the value to be set back
		int length = request.getText().length();
		
		//preparing the response message
		ResponseMessage reply = ResponseMessage.newBuilder().setLength(length).build();

		responseObserver.onNext( reply ); 

		responseObserver.onCompleted();

	}
}

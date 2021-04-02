package ds.service3;

import java.io.IOException;

import ds.service3.Service3Grpc.Service3ImplBase;
import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;


public class Service3 extends Service3ImplBase{



	public static void main(String[] args) throws InterruptedException, IOException {
		Service3 service1 = new Service3();

		int port = 50053;

		Server server = ServerBuilder.forPort(port)
				.addService(service1)
				.build()
				.start();

		System.out.println("Service-3 started, listening on " + port);

		server.awaitTermination();
	}


	@Override
	public void service3Do(RequestMessage request, StreamObserver<ResponseMessage> responseObserver) {

		//prepare the value to be set back
		int length = request.getText().length();
		
		//preparing the response message
		ResponseMessage reply = ResponseMessage.newBuilder().setLength(length).build();

		responseObserver.onNext( reply ); 

		responseObserver.onCompleted();

	}
}

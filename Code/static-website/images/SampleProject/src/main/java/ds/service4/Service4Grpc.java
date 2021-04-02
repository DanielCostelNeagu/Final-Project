package ds.service4;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * Interface exported by the server.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.15.0)",
    comments = "Source: service4.proto")
public final class Service4Grpc {

  private Service4Grpc() {}

  public static final String SERVICE_NAME = "service4.Service4";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ds.service4.RequestMessage,
      ds.service4.ResponseMessage> getService4DoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "service4_do",
      requestType = ds.service4.RequestMessage.class,
      responseType = ds.service4.ResponseMessage.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ds.service4.RequestMessage,
      ds.service4.ResponseMessage> getService4DoMethod() {
    io.grpc.MethodDescriptor<ds.service4.RequestMessage, ds.service4.ResponseMessage> getService4DoMethod;
    if ((getService4DoMethod = Service4Grpc.getService4DoMethod) == null) {
      synchronized (Service4Grpc.class) {
        if ((getService4DoMethod = Service4Grpc.getService4DoMethod) == null) {
          Service4Grpc.getService4DoMethod = getService4DoMethod = 
              io.grpc.MethodDescriptor.<ds.service4.RequestMessage, ds.service4.ResponseMessage>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "service4.Service4", "service4_do"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ds.service4.RequestMessage.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ds.service4.ResponseMessage.getDefaultInstance()))
                  .setSchemaDescriptor(new Service4MethodDescriptorSupplier("service4_do"))
                  .build();
          }
        }
     }
     return getService4DoMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static Service4Stub newStub(io.grpc.Channel channel) {
    return new Service4Stub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static Service4BlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new Service4BlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static Service4FutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new Service4FutureStub(channel);
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static abstract class Service4ImplBase implements io.grpc.BindableService {

    /**
     */
    public void service4Do(ds.service4.RequestMessage request,
        io.grpc.stub.StreamObserver<ds.service4.ResponseMessage> responseObserver) {
      asyncUnimplementedUnaryCall(getService4DoMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getService4DoMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                ds.service4.RequestMessage,
                ds.service4.ResponseMessage>(
                  this, METHODID_SERVICE4_DO)))
          .build();
    }
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class Service4Stub extends io.grpc.stub.AbstractStub<Service4Stub> {
    private Service4Stub(io.grpc.Channel channel) {
      super(channel);
    }

    private Service4Stub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected Service4Stub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new Service4Stub(channel, callOptions);
    }

    /**
     */
    public void service4Do(ds.service4.RequestMessage request,
        io.grpc.stub.StreamObserver<ds.service4.ResponseMessage> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getService4DoMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class Service4BlockingStub extends io.grpc.stub.AbstractStub<Service4BlockingStub> {
    private Service4BlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private Service4BlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected Service4BlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new Service4BlockingStub(channel, callOptions);
    }

    /**
     */
    public ds.service4.ResponseMessage service4Do(ds.service4.RequestMessage request) {
      return blockingUnaryCall(
          getChannel(), getService4DoMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class Service4FutureStub extends io.grpc.stub.AbstractStub<Service4FutureStub> {
    private Service4FutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private Service4FutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected Service4FutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new Service4FutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ds.service4.ResponseMessage> service4Do(
        ds.service4.RequestMessage request) {
      return futureUnaryCall(
          getChannel().newCall(getService4DoMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SERVICE4_DO = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final Service4ImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(Service4ImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SERVICE4_DO:
          serviceImpl.service4Do((ds.service4.RequestMessage) request,
              (io.grpc.stub.StreamObserver<ds.service4.ResponseMessage>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class Service4BaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    Service4BaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ds.service4.Service4Impl.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Service4");
    }
  }

  private static final class Service4FileDescriptorSupplier
      extends Service4BaseDescriptorSupplier {
    Service4FileDescriptorSupplier() {}
  }

  private static final class Service4MethodDescriptorSupplier
      extends Service4BaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    Service4MethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (Service4Grpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new Service4FileDescriptorSupplier())
              .addMethod(getService4DoMethod())
              .build();
        }
      }
    }
    return result;
  }
}
